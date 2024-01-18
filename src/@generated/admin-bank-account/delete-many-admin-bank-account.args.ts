import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminBankAccountWhereInput } from './admin-bank-account-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAdminBankAccountArgs {

    @Field(() => AdminBankAccountWhereInput, {nullable:true})
    @Type(() => AdminBankAccountWhereInput)
    where?: AdminBankAccountWhereInput;
}
