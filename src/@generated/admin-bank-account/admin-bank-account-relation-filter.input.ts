import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminBankAccountWhereInput } from './admin-bank-account-where.input';

@InputType()
export class AdminBankAccountRelationFilter {

    @Field(() => AdminBankAccountWhereInput, {nullable:true})
    is?: AdminBankAccountWhereInput;

    @Field(() => AdminBankAccountWhereInput, {nullable:true})
    isNot?: AdminBankAccountWhereInput;
}
