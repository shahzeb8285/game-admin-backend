import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneplayersArgs {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;
}
