import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutWalletInput } from './players-update-without-wallet.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutWalletInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutWalletInput, {nullable:false})
    @Type(() => playersUpdateWithoutWalletInput)
    data!: playersUpdateWithoutWalletInput;
}
