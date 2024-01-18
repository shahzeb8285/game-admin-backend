import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletRequestCreateManyInput } from './wallet-request-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWalletRequestArgs {

    @Field(() => [WalletRequestCreateManyInput], {nullable:false})
    @Type(() => WalletRequestCreateManyInput)
    data!: Array<WalletRequestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
