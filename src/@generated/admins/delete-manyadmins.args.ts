import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { adminsWhereInput } from './admins-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyadminsArgs {

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    where?: adminsWhereInput;
}
