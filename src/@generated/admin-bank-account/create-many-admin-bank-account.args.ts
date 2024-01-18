import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminBankAccountCreateManyInput } from './admin-bank-account-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAdminBankAccountArgs {

    @Field(() => [AdminBankAccountCreateManyInput], {nullable:false})
    @Type(() => AdminBankAccountCreateManyInput)
    data!: Array<AdminBankAccountCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
