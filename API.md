# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PreinstalledAmazonLinuxInstance <a name="PreinstalledAmazonLinuxInstance" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance"></a>

Create an EC2 instance with preinstalled software.

#### Initializers <a name="Initializers" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.Initializer"></a>

```typescript
import { PreinstalledAmazonLinuxInstance } from 'cdk-preinstalled-amazon-linux-ec2'

new PreinstalledAmazonLinuxInstance(scope: Construct, id: string, props: PreinstalledAmazonLinuxInstanceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps">PreinstalledAmazonLinuxInstanceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps">PreinstalledAmazonLinuxInstanceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.addSecurityGroup">addSecurityGroup</a></code> | Add the security group to the instance. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.addToRolePolicy">addToRolePolicy</a></code> | Adds a statement to the IAM role assumed by the instance. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.addUserData">addUserData</a></code> | Add command to the startup script of the instance. |

---

##### `toString` <a name="toString" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addSecurityGroup` <a name="addSecurityGroup" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.addSecurityGroup"></a>

```typescript
public addSecurityGroup(securityGroup: ISecurityGroup): void
```

Add the security group to the instance.

###### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.addSecurityGroup.parameter.securityGroup"></a>

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

: The security group to add.

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Adds a statement to the IAM role assumed by the instance.

###### `statement`<sup>Required</sup> <a name="statement" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `addUserData` <a name="addUserData" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.addUserData"></a>

```typescript
public addUserData(commands: string): void
```

Add command to the startup script of the instance.

The command must be in the scripting language supported by the instance's OS (i.e. Linux/Windows).

###### `commands`<sup>Required</sup> <a name="commands" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.addUserData.parameter.commands"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.isConstruct"></a>

```typescript
import { PreinstalledAmazonLinuxInstance } from 'cdk-preinstalled-amazon-linux-ec2'

PreinstalledAmazonLinuxInstance.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.isOwnedResource"></a>

```typescript
import { PreinstalledAmazonLinuxInstance } from 'cdk-preinstalled-amazon-linux-ec2'

PreinstalledAmazonLinuxInstance.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.isResource"></a>

```typescript
import { PreinstalledAmazonLinuxInstance } from 'cdk-preinstalled-amazon-linux-ec2'

PreinstalledAmazonLinuxInstance.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Allows specify security group connections for the instance. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.instance">instance</a></code> | <code>aws-cdk-lib.aws_ec2.CfnInstance</code> | the underlying instance resource. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.instanceAvailabilityZone">instanceAvailabilityZone</a></code> | <code>string</code> | The availability zone the instance was launched in. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.instanceId">instanceId</a></code> | <code>string</code> | The instance's ID. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.instancePrivateDnsName">instancePrivateDnsName</a></code> | <code>string</code> | Private DNS name for this instance. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.instancePrivateIp">instancePrivateIp</a></code> | <code>string</code> | Private IP for this instance. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.instancePublicDnsName">instancePublicDnsName</a></code> | <code>string</code> | Publicly-routable DNS name for this instance. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.instancePublicIp">instancePublicIp</a></code> | <code>string</code> | Publicly-routable IP  address for this instance. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.osType">osType</a></code> | <code>aws-cdk-lib.aws_ec2.OperatingSystemType</code> | The type of OS the instance is running. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role assumed by the instance. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.userData">userData</a></code> | <code>aws-cdk-lib.aws_ec2.UserData</code> | UserData for the instance. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `connections`<sup>Required</sup> <a name="connections" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Allows specify security group connections for the instance.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.instance"></a>

```typescript
public readonly instance: CfnInstance;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnInstance

the underlying instance resource.

---

##### `instanceAvailabilityZone`<sup>Required</sup> <a name="instanceAvailabilityZone" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.instanceAvailabilityZone"></a>

```typescript
public readonly instanceAvailabilityZone: string;
```

- *Type:* string

The availability zone the instance was launched in.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The instance's ID.

---

##### `instancePrivateDnsName`<sup>Required</sup> <a name="instancePrivateDnsName" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.instancePrivateDnsName"></a>

```typescript
public readonly instancePrivateDnsName: string;
```

- *Type:* string

Private DNS name for this instance.

---

##### `instancePrivateIp`<sup>Required</sup> <a name="instancePrivateIp" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.instancePrivateIp"></a>

```typescript
public readonly instancePrivateIp: string;
```

- *Type:* string

Private IP for this instance.

---

##### `instancePublicDnsName`<sup>Required</sup> <a name="instancePublicDnsName" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.instancePublicDnsName"></a>

```typescript
public readonly instancePublicDnsName: string;
```

- *Type:* string

Publicly-routable DNS name for this instance.

(May be an empty string if the instance does not have a public name).

---

##### `instancePublicIp`<sup>Required</sup> <a name="instancePublicIp" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.instancePublicIp"></a>

```typescript
public readonly instancePublicIp: string;
```

- *Type:* string

Publicly-routable IP  address for this instance.

(May be an empty string if the instance does not have a public IP).

---

##### `osType`<sup>Required</sup> <a name="osType" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.osType"></a>

```typescript
public readonly osType: OperatingSystemType;
```

- *Type:* aws-cdk-lib.aws_ec2.OperatingSystemType

The type of OS the instance is running.

---

##### `role`<sup>Required</sup> <a name="role" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role assumed by the instance.

---

##### `userData`<sup>Required</sup> <a name="userData" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstance.property.userData"></a>

```typescript
public readonly userData: UserData;
```

- *Type:* aws-cdk-lib.aws_ec2.UserData

UserData for the instance.

---


## Structs <a name="Structs" id="Structs"></a>

### PreinstalledAmazonLinuxInstanceProps <a name="PreinstalledAmazonLinuxInstanceProps" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps"></a>

Properties for PreinstalledAmazonLinuxInstance.

#### Initializer <a name="Initializer" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.Initializer"></a>

```typescript
import { PreinstalledAmazonLinuxInstanceProps } from 'cdk-preinstalled-amazon-linux-ec2'

const preinstalledAmazonLinuxInstanceProps: PreinstalledAmazonLinuxInstanceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | Type of instance to launch. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.machineImage">machineImage</a></code> | <code>aws-cdk-lib.aws_ec2.IMachineImage</code> | AMI to launch. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC to launch the instance in. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.allowAllIpv6Outbound">allowAllIpv6Outbound</a></code> | <code>boolean</code> | Whether the instance could initiate IPv6 connections to anywhere by default. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether the instance could initiate connections to anywhere by default. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean</code> | Whether to associate a public IP address to the primary network interface attached to this instance. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | In which AZ to place the instance within the VPC. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.blockDevices">blockDevices</a></code> | <code>aws-cdk-lib.aws_ec2.BlockDevice[]</code> | Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.creditSpecification">creditSpecification</a></code> | <code>aws-cdk-lib.aws_ec2.CpuCredits</code> | Specifying the CPU credit type for burstable EC2 instance types (T2, T3, T3a, etc). |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.detailedMonitoring">detailedMonitoring</a></code> | <code>boolean</code> | Whether "Detailed Monitoring" is enabled for this instance Keep in mind that Detailed Monitoring results in extra charges. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean</code> | Indicates whether the instance is optimized for Amazon EBS I/O. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.init">init</a></code> | <code>aws-cdk-lib.aws_ec2.CloudFormationInit</code> | Apply the given CloudFormation Init configuration to the instance at startup. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.initOptions">initOptions</a></code> | <code>aws-cdk-lib.aws_ec2.ApplyCloudFormationInitOptions</code> | Use the given options for applying CloudFormation Init. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.instanceName">instanceName</a></code> | <code>string</code> | The name of the instance. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.keyName">keyName</a></code> | <code>string</code> | Name of SSH keypair to grant access to instance. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.keyPair">keyPair</a></code> | <code>aws-cdk-lib.aws_ec2.IKeyPair</code> | The SSH keypair to grant access to the instance. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.placementGroup">placementGroup</a></code> | <code>aws-cdk-lib.aws_ec2.IPlacementGroup</code> | The placement group that you want to launch the instance into. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | Defines a private IP address to associate with an instance. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.propagateTagsToVolumeOnCreation">propagateTagsToVolumeOnCreation</a></code> | <code>boolean</code> | Propagate the EC2 instance tags to the EBS volumes. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.requireImdsv2">requireImdsv2</a></code> | <code>boolean</code> | Whether IMDSv2 should be required on this instance. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.resourceSignalTimeout">resourceSignalTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The length of time to wait for the resourceSignalCount. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | An IAM role to associate with the instance profile assigned to this Auto Scaling Group. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | Security Group to assign to this instance. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.sourceDestCheck">sourceDestCheck</a></code> | <code>boolean</code> | Specifies whether to enable an instance launched in a VPC to perform NAT. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.ssmSessionPermissions">ssmSessionPermissions</a></code> | <code>boolean</code> | Add SSM session permissions to the instance role. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.userData">userData</a></code> | <code>aws-cdk-lib.aws_ec2.UserData</code> | Specific UserData to use. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.userDataCausesReplacement">userDataCausesReplacement</a></code> | <code>boolean</code> | Changes to the UserData force replacement. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the instance within the VPC. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.preinstalledSoftware">preinstalledSoftware</a></code> | <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftware">PreinstalledSoftware</a></code> | The software to preinstall on the instance. |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

Type of instance to launch.

---

##### `machineImage`<sup>Required</sup> <a name="machineImage" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.machineImage"></a>

```typescript
public readonly machineImage: IMachineImage;
```

- *Type:* aws-cdk-lib.aws_ec2.IMachineImage

AMI to launch.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC to launch the instance in.

---

##### `allowAllIpv6Outbound`<sup>Optional</sup> <a name="allowAllIpv6Outbound" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.allowAllIpv6Outbound"></a>

```typescript
public readonly allowAllIpv6Outbound: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the instance could initiate IPv6 connections to anywhere by default.

This property is only used when you do not provide a security group.

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the instance could initiate connections to anywhere by default.

This property is only used when you do not provide a security group.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean;
```

- *Type:* boolean
- *Default:* public IP address is automatically assigned based on default behavior

Whether to associate a public IP address to the primary network interface attached to this instance.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string
- *Default:* Random zone.

In which AZ to place the instance within the VPC.

---

##### `blockDevices`<sup>Optional</sup> <a name="blockDevices" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.blockDevices"></a>

```typescript
public readonly blockDevices: BlockDevice[];
```

- *Type:* aws-cdk-lib.aws_ec2.BlockDevice[]
- *Default:* Uses the block device mapping of the AMI

Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes.

Each instance that is launched has an associated root device volume,
either an Amazon EBS volume or an instance store volume.
You can use block device mappings to specify additional EBS volumes or
instance store volumes to attach to an instance when it is launched.

> [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html)

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: CpuCredits;
```

- *Type:* aws-cdk-lib.aws_ec2.CpuCredits
- *Default:* T2 instances are standard, while T3, T4g, and T3a instances are unlimited.

Specifying the CPU credit type for burstable EC2 instance types (T2, T3, T3a, etc).

The unlimited CPU credit option is not supported for T3 instances with a dedicated host.

---

##### `detailedMonitoring`<sup>Optional</sup> <a name="detailedMonitoring" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.detailedMonitoring"></a>

```typescript
public readonly detailedMonitoring: boolean;
```

- *Type:* boolean
- *Default:* false

Whether "Detailed Monitoring" is enabled for this instance Keep in mind that Detailed Monitoring results in extra charges.

> [http://aws.amazon.com/cloudwatch/pricing/](http://aws.amazon.com/cloudwatch/pricing/)

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean;
```

- *Type:* boolean
- *Default:* false

Indicates whether the instance is optimized for Amazon EBS I/O.

This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance.
This optimization isn't available with all instance types.
Additional usage charges apply when using an EBS-optimized instance.

---

##### `init`<sup>Optional</sup> <a name="init" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.init"></a>

```typescript
public readonly init: CloudFormationInit;
```

- *Type:* aws-cdk-lib.aws_ec2.CloudFormationInit
- *Default:* no CloudFormation init

Apply the given CloudFormation Init configuration to the instance at startup.

---

##### `initOptions`<sup>Optional</sup> <a name="initOptions" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.initOptions"></a>

```typescript
public readonly initOptions: ApplyCloudFormationInitOptions;
```

- *Type:* aws-cdk-lib.aws_ec2.ApplyCloudFormationInitOptions
- *Default:* default options

Use the given options for applying CloudFormation Init.

Describes the configsets to use and the timeout to wait

---

##### `instanceName`<sup>Optional</sup> <a name="instanceName" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string
- *Default:* CDK generated name

The name of the instance.

---

##### ~~`keyName`~~<sup>Optional</sup> <a name="keyName" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.keyName"></a>

- *Deprecated:* - Use `keyPair` instead - https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2-readme.html#using-an-existing-ec2-key-pair

```typescript
public readonly keyName: string;
```

- *Type:* string
- *Default:* No SSH access will be possible.

Name of SSH keypair to grant access to instance.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.keyPair"></a>

```typescript
public readonly keyPair: IKeyPair;
```

- *Type:* aws-cdk-lib.aws_ec2.IKeyPair
- *Default:* No SSH access will be possible.

The SSH keypair to grant access to the instance.

---

##### `placementGroup`<sup>Optional</sup> <a name="placementGroup" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.placementGroup"></a>

```typescript
public readonly placementGroup: IPlacementGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.IPlacementGroup
- *Default:* no placement group will be used for this instance.

The placement group that you want to launch the instance into.

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string
- *Default:* no association

Defines a private IP address to associate with an instance.

Private IP should be available within the VPC that the instance is build within.

---

##### `propagateTagsToVolumeOnCreation`<sup>Optional</sup> <a name="propagateTagsToVolumeOnCreation" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.propagateTagsToVolumeOnCreation"></a>

```typescript
public readonly propagateTagsToVolumeOnCreation: boolean;
```

- *Type:* boolean
- *Default:* false

Propagate the EC2 instance tags to the EBS volumes.

---

##### `requireImdsv2`<sup>Optional</sup> <a name="requireImdsv2" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.requireImdsv2"></a>

```typescript
public readonly requireImdsv2: boolean;
```

- *Type:* boolean
- *Default:* false

Whether IMDSv2 should be required on this instance.

---

##### `resourceSignalTimeout`<sup>Optional</sup> <a name="resourceSignalTimeout" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.resourceSignalTimeout"></a>

```typescript
public readonly resourceSignalTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.minutes(5)

The length of time to wait for the resourceSignalCount.

The maximum value is 43200 (12 hours).

---

##### `role`<sup>Optional</sup> <a name="role" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A role will automatically be created, it can be accessed via the `role` property

An IAM role to associate with the instance profile assigned to this Auto Scaling Group.

The role must be assumable by the service principal `ec2.amazonaws.com`:

---

*Example*

```typescript
const role = new iam.Role(this, 'MyRole', {
  assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com')
});
```


##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* create new security group

Security Group to assign to this instance.

---

##### `sourceDestCheck`<sup>Optional</sup> <a name="sourceDestCheck" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.sourceDestCheck"></a>

```typescript
public readonly sourceDestCheck: boolean;
```

- *Type:* boolean
- *Default:* true

Specifies whether to enable an instance launched in a VPC to perform NAT.

This controls whether source/destination checking is enabled on the instance.
A value of true means that checking is enabled, and false means that checking is disabled.
The value must be false for the instance to perform NAT.

---

##### `ssmSessionPermissions`<sup>Optional</sup> <a name="ssmSessionPermissions" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.ssmSessionPermissions"></a>

```typescript
public readonly ssmSessionPermissions: boolean;
```

- *Type:* boolean
- *Default:* false

Add SSM session permissions to the instance role.

Setting this to `true` adds the necessary permissions to connect
to the instance using SSM Session Manager. You can do this
from the AWS Console.

NOTE: Setting this flag to `true` may not be enough by itself.
You must also use an AMI that comes with the SSM Agent, or install
the SSM Agent yourself. See
[Working with SSM Agent](https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-agent.html)
in the SSM Developer Guide.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.userData"></a>

```typescript
public readonly userData: UserData;
```

- *Type:* aws-cdk-lib.aws_ec2.UserData
- *Default:* A UserData object appropriate for the MachineImage's Operating System is created.

Specific UserData to use.

The UserData may still be mutated after creation.

---

##### `userDataCausesReplacement`<sup>Optional</sup> <a name="userDataCausesReplacement" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.userDataCausesReplacement"></a>

```typescript
public readonly userDataCausesReplacement: boolean;
```

- *Type:* boolean
- *Default:* true iff `initOptions` is specified, false otherwise.

Changes to the UserData force replacement.

Depending the EC2 instance type, changing UserData either
restarts the instance or replaces the instance.

- Instance store-backed instances are replaced.
- EBS-backed instances are restarted.

By default, restarting does not execute the new UserData so you
will need a different mechanism to ensure the instance is restarted.

Setting this to `true` will make the instance's Logical ID depend on the
UserData, which will cause CloudFormation to replace it if the UserData
changes.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* Private subnets.

Where to place the instance within the VPC.

---

##### `preinstalledSoftware`<sup>Optional</sup> <a name="preinstalledSoftware" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledAmazonLinuxInstanceProps.property.preinstalledSoftware"></a>

```typescript
public readonly preinstalledSoftware: PreinstalledSoftware;
```

- *Type:* <a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftware">PreinstalledSoftware</a>
- *Default:* no software is preinstalled

The software to preinstall on the instance.

---

### PreinstalledSoftware <a name="PreinstalledSoftware" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftware"></a>

The configuration for preinstalled software.

#### Initializer <a name="Initializer" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftware.Initializer"></a>

```typescript
import { PreinstalledSoftware } from 'cdk-preinstalled-amazon-linux-ec2'

const preinstalledSoftware: PreinstalledSoftware = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftware.property.others">others</a></code> | <code>string[]</code> | Whether to install other software. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftware.property.packages">packages</a></code> | <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftwarePackage">PreinstalledSoftwarePackage</a>[]</code> | The type of preinstalled software. |

---

##### `others`<sup>Optional</sup> <a name="others" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftware.property.others"></a>

```typescript
public readonly others: string[];
```

- *Type:* string[]
- *Default:* no other software is preinstalled

Whether to install other software.

This is a list of software to install and passed to `dnf install <software>`

---

##### `packages`<sup>Optional</sup> <a name="packages" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftware.property.packages"></a>

```typescript
public readonly packages: PreinstalledSoftwarePackage[];
```

- *Type:* <a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftwarePackage">PreinstalledSoftwarePackage</a>[]
- *Default:* no software is preinstalled

The type of preinstalled software.

---



## Enums <a name="Enums" id="Enums"></a>

### PreinstalledSoftwarePackage <a name="PreinstalledSoftwarePackage" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftwarePackage"></a>

The type of preinstalled software.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftwarePackage.NODEJS">NODEJS</a></code> | Node.js. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftwarePackage.DOCKER">DOCKER</a></code> | Docker. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftwarePackage.VSCODE">VSCODE</a></code> | Visual Studio Code. |
| <code><a href="#cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftwarePackage.GIT">GIT</a></code> | Git. |

---

##### `NODEJS` <a name="NODEJS" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftwarePackage.NODEJS"></a>

Node.js.

---


##### `DOCKER` <a name="DOCKER" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftwarePackage.DOCKER"></a>

Docker.

---


##### `VSCODE` <a name="VSCODE" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftwarePackage.VSCODE"></a>

Visual Studio Code.

---


##### `GIT` <a name="GIT" id="cdk-preinstalled-amazon-linux-ec2.PreinstalledSoftwarePackage.GIT"></a>

Git.

---

