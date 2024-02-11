import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutWalletInput } from './players-create-without-wallet.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutWalletInput } from './players-create-or-connect-without-wallet.input';
import { playersWhereUniqueInput } from './players-where-unique.input';

@InputType()
export class playersCreateNestedOneWithoutWalletInput {

    @Field(() => playersCreateWithoutWalletInput, {nullable:true})
    @Type(() => playersCreateWithoutWalletInput)
    create?: playersCreateWithoutWalletInput;

    @Field(() => playersCreateOrConnectWithoutWalletInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutWalletInput)
    connectOrCreate?: playersCreateOrConnectWithoutWalletInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;
}
