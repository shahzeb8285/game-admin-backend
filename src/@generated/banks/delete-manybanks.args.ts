import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { banksWhereInput } from './banks-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManybanksArgs {

    @Field(() => banksWhereInput, {nullable:true})
    @Type(() => banksWhereInput)
    where?: banksWhereInput;
}
