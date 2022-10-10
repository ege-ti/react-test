cd infra
./node_modules/.bin/cdk destroy
touch output.txt
npm install
./node_modules/.bin/cdk deploy --require-approval=never --outputs-file output.txt