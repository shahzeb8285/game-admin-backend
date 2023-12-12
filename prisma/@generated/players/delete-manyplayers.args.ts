import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyplayersArgs {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
