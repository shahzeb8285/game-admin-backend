import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminsWhereInput } from './admins-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAdminsArgs {

    @Field(() => AdminsWhereInput, {nullable:true})
    @Type(() => AdminsWhereInput)
    where?: AdminsWhereInput;
}
