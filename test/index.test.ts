import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { PreinstalledAmazonLinuxInstance, PreinstalledSoftwareType } from '../src';

describe('PreinstalledAmazonLinuxInstance', () => {
  let stack: Stack;

  beforeEach(() => {
    const app = new App();
    stack = new Stack(app, 'TestStack');
  });

  test('should create an instance with Node.js preinstalled', () => {
    new PreinstalledAmazonLinuxInstance(stack, 'InstanceWithNodeJS', {
      vpc: new ec2.Vpc(stack, 'Vpc'),
      instanceType: new ec2.InstanceType('t3.micro'),
      machineImage: new ec2.AmazonLinuxImage(),
      preinstalledSoftware: {
        type: [PreinstalledSoftwareType.NODEJS],
      },
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::Instance', {
      UserData: {
        'Fn::Base64': '#!/bin/bash\nsudo dnf update -y\ntouch ~/.bashrc\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\nsource ~/.bashrc\nexport NVM_DIR="$HOME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"\nnvm install --lts\ncat <<EOF >> /home/ec2-user/.bashrc\nexport NVM_DIR="/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"\nEOF',
      },
    });
  });

  test('should create an instance with Docker preinstalled', () => {
    new PreinstalledAmazonLinuxInstance(stack, 'InstanceWithDocker', {
      vpc: new ec2.Vpc(stack, 'Vpc'),
      instanceType: new ec2.InstanceType('t3.micro'),
      machineImage: new ec2.AmazonLinuxImage(),
      preinstalledSoftware: {
        type: [PreinstalledSoftwareType.DOCKER],
      },
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::Instance', {
      UserData: {
        'Fn::Base64': '#!/bin/bash\nsudo dnf update -y\nsudo amazon-linux-extras install docker\nsudo systemctl start docker\nsudo systemctl enable docker\nsudo usermod -a -G docker ec2-user',
      },
    });
  });

  test('should create an instance with Visual Studio Code preinstalled', () => {
    new PreinstalledAmazonLinuxInstance(stack, 'InstanceWithVSCode', {
      vpc: new ec2.Vpc(stack, 'Vpc'),
      instanceType: new ec2.InstanceType('t3.micro'),
      machineImage: new ec2.AmazonLinuxImage(),
      preinstalledSoftware: {
        type: [PreinstalledSoftwareType.VSCODE],
      },
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::Instance', {
      UserData: {
        'Fn::Base64': '#!/bin/bash\nsudo dnf update -y\nsudo rpm --import https://packages.microsoft.com/keys/microsoft.asc\necho -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" | sudo tee /etc/yum.repos.d/vscode.repo > /dev/null\nsudo dnf check-update\nsudo dnf install -y code',
      },
    });
  });

  test('should create an instance with Git preinstalled', () => {
    new PreinstalledAmazonLinuxInstance(stack, 'InstanceWithGit', {
      vpc: new ec2.Vpc(stack, 'Vpc'),
      instanceType: new ec2.InstanceType('t3.micro'),
      machineImage: new ec2.AmazonLinuxImage(),
      preinstalledSoftware: {
        type: [PreinstalledSoftwareType.GIT],
      },
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::Instance', {
      UserData: {
        'Fn::Base64': '#!/bin/bash\nsudo dnf update -y\nsudo dnf install -y git',
      },
    });
  });

  test('should create an instance with additional software preinstalled', () => {
    new PreinstalledAmazonLinuxInstance(stack, 'InstanceWithAdditionalSoftware', {
      vpc: new ec2.Vpc(stack, 'Vpc'),
      instanceType: new ec2.InstanceType('t3.micro'),
      machineImage: new ec2.AmazonLinuxImage(),
      preinstalledSoftware: {
        others: ['htop', 'wget'],
      },
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::Instance', {
      UserData: {
        'Fn::Base64': '#!/bin/bash\nsudo dnf update -y\nsudo dnf install -y htop wget',
      },
    });
  });
});
