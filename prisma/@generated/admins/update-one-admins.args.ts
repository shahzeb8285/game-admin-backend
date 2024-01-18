import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminsUpdateInput } from './admins-update.input';
import { Type } from 'class-transformer';
import { AdminsWhereUniqueInput } from './admins-where-unique.input';

@ArgsType()
export class UpdateOneAdminsArgs {

    @Field(() => AdminsUpdateInput, {nullable:false})
    @Type(() => AdminsUpdateInput)
    data!: AdminsUpdateInput;

    @Field(() => AdminsWhereUniqueInput, {nullable:false})
    @Type(() => AdminsWhereUniqueInput)
    where!: AdminsWhereUniqueInput;
}
