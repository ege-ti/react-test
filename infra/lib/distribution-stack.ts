import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3 from "aws-cdk-lib/aws-s3";
import { config } from "dotenv";
import { Distribution } from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
config();

export class DistributionStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const user = new iam.User(this, "User", {
      userName: process.env.AWS_STACK ?? "my-frontend-stack",
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName("AmazonS3FullAccess"),
        iam.ManagedPolicy.fromAwsManagedPolicyName("CloudFrontFullAccess"),
      ],
    });

    const creds = new iam.CfnAccessKey(this, "Creds", {
      userName: user.userName,
    });

    new cdk.CfnOutput(this, "AwsAccessKeyId", {
      value: creds.ref
    });

    new cdk.CfnOutput(this, "AwsSecretAccessKey", {
      value: creds.attrSecretAccessKey
    });

    const bucket = new s3.Bucket(this, process.env.AWS_BUCKET ?? "my-frontend-bucket", {
      bucketName: process.env.AWS_BUCKET,
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html",
    });

    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      sources: [s3deploy.Source.asset('../build')],
      destinationBucket: bucket,
    });

    new cdk.CfnOutput(this, "AwsBucket", {
      value: bucket.bucketName
    });

    const cdn = new Distribution(this, 'CDN', {
      defaultBehavior: { origin: new S3Origin(bucket) }
    });

    new cdk.CfnOutput(this, "DistributionDomainName", {
      value: cdn.distributionDomainName,
    });

    new cdk.CfnOutput(this, "AwsDistributionId", {
      value: cdn.distributionId,
    });
  }
}
