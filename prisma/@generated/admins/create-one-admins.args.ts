import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminsCreateInput } from './admins-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAdminsArgs {

    @Field(() => AdminsCreateInput, {nullable:false})
    @Type(() => AdminsCreateInput)
    data!: AdminsCreateInput;
}
