import { awscdk } from 'projen';
import { NodePackageManager } from 'projen/lib/javascript';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kazuho CryerShinozuka',
  authorAddress: 'malaysia.cryer@gmail.com',
  cdkVersion: '2.143.0',
  defaultReleaseBranch: 'main',
  packageManager: NodePackageManager.YARN_CLASSIC,
  jsiiVersion: '~5.8.0',
  name: 'cdk-preinstalled-amazon-linux-ec2',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/badmintoncryer/cdk-preinstalled-amazon-linux-ec2.git',
  description: 'CDK Construct for creating an Amazon Linux EC2 instance with pre-installed software',
  keywords: ['aws', 'cdk', 'ec2', 'nodejs', 'aws-cdk', 'vscode', 'docker'],
  gitignore: ['*.js', '*.d.ts', '!test/.*.snapshot/**/*', '.tmp'],
  // deps: [],                /* Runtime dependencies of this module. */
  devDeps: [
    '@aws-cdk/integ-runner@2.143.0-alpha.0',
    '@aws-cdk/integ-tests-alpha@2.143.0-alpha.0',
    '@open-constructs/aws-cdk',
  ],
  releaseToNpm: true,
  packageName: 'cdk-preinstalled-amazon-linux-ec2',
  npmTrustedPublishing: true,
  workflowNodeVersion: '24',
  publishToPypi: {
    distName: 'cdk-preinstalled-amazon-linux-ec2',
    module: 'cdk_preinstalled_amazon_linux_ec2',
    trustedPublishing: true,
  },
});
project.projectBuild.testTask.exec(
  'yarn tsc -p test/tsconfig.json --noEmit false --outDir . && yarn integ-runner',
);
project.synth();