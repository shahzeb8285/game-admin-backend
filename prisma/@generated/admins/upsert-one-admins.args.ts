import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';
import { AdminsCreateInput } from './admins-create.input';
import { AdminsUpdateInput } from './admins-update.input';

@ArgsType()
export class UpsertOneAdminsArgs {

    @Field(() => AdminsWhereUniqueInput, {nullable:false})
    @Type(() => AdminsWhereUniqueInput)
    where!: AdminsWhereUniqueInput;

    @Field(() => AdminsCreateInput, {nullable:false})
    @Type(() => AdminsCreateInput)
    create!: AdminsCreateInput;

    @Field(() => AdminsUpdateInput, {nullable:false})
    @Type(() => AdminsUpdateInput)
    update!: AdminsUpdateInput;
}
