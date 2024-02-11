import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutWalletInput } from './players-update-without-wallet.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutWalletInput } from './players-create-without-wallet.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutWalletInput {

    @Field(() => playersUpdateWithoutWalletInput, {nullable:false})
    @Type(() => playersUpdateWithoutWalletInput)
    update!: playersUpdateWithoutWalletInput;

    @Field(() => playersCreateWithoutWalletInput, {nullable:false})
    @Type(() => playersCreateWithoutWalletInput)
    create!: playersCreateWithoutWalletInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
