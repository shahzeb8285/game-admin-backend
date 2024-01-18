import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneAdminsArgs {

    @Field(() => AdminsWhereUniqueInput, {nullable:false})
    @Type(() => AdminsWhereUniqueInput)
    where!: AdminsWhereUniqueInput;
}
