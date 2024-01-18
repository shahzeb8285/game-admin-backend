import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminUpdateInput } from './admin-update.input';
import { Type } from 'class-transformer';
import { AdminWhereUniqueInput } from './admin-where-unique.input';

@ArgsType()
export class UpdateOneAdminArgs {

    @Field(() => AdminUpdateInput, {nullable:false})
    @Type(() => AdminUpdateInput)
    data!: AdminUpdateInput;

    @Field(() => AdminWhereUniqueInput, {nullable:false})
    @Type(() => AdminWhereUniqueInput)
    where!: AdminWhereUniqueInput;
}
