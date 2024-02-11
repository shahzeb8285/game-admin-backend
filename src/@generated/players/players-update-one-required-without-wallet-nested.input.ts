import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutWalletInput } from './players-create-without-wallet.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutWalletInput } from './players-create-or-connect-without-wallet.input';
import { playersUpsertWithoutWalletInput } from './players-upsert-without-wallet.input';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutWalletInput } from './players-update-to-one-with-where-without-wallet.input';

@InputType()
export class playersUpdateOneRequiredWithoutWalletNestedInput {

    @Field(() => playersCreateWithoutWalletInput, {nullable:true})
    @Type(() => playersCreateWithoutWalletInput)
    create?: playersCreateWithoutWalletInput;

    @Field(() => playersCreateOrConnectWithoutWalletInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutWalletInput)
    connectOrCreate?: playersCreateOrConnectWithoutWalletInput;

    @Field(() => playersUpsertWithoutWalletInput, {nullable:true})
    @Type(() => playersUpsertWithoutWalletInput)
    upsert?: playersUpsertWithoutWalletInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;

    @Field(() => playersUpdateToOneWithWhereWithoutWalletInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutWalletInput)
    update?: playersUpdateToOneWithWhereWithoutWalletInput;
}
