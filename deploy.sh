cd infra
touch output.txt
npm install
./node_modules/.bin/cdk deploy --require-approval=never --outputs-file output.txt