import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminBankAccountUpdateManyMutationInput } from './admin-bank-account-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AdminBankAccountWhereInput } from './admin-bank-account-where.input';

@ArgsType()
export class UpdateManyAdminBankAccountArgs {

    @Field(() => AdminBankAccountUpdateManyMutationInput, {nullable:false})
    @Type(() => AdminBankAccountUpdateManyMutationInput)
    data!: AdminBankAccountUpdateManyMutationInput;

    @Field(() => AdminBankAccountWhereInput, {nullable:true})
    @Type(() => AdminBankAccountWhereInput)
    where?: AdminBankAccountWhereInput;
}
