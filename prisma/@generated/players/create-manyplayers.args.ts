import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { playersCreateManyInput } from './players-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyplayersArgs {

    @Field(() => [playersCreateManyInput], {nullable:false})
    @Type(() => playersCreateManyInput)
    data!: Array<playersCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
