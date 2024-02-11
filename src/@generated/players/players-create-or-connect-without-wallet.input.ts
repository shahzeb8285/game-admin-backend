import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutWalletInput } from './players-create-without-wallet.input';

@InputType()
export class playersCreateOrConnectWithoutWalletInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateWithoutWalletInput, {nullable:false})
    @Type(() => playersCreateWithoutWalletInput)
    create!: playersCreateWithoutWalletInput;
}
