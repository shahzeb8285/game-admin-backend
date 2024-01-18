import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrentActivePlayersCreateManyInput } from './current-active-players-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCurrentActivePlayersArgs {

    @Field(() => [CurrentActivePlayersCreateManyInput], {nullable:false})
    @Type(() => CurrentActivePlayersCreateManyInput)
    data!: Array<CurrentActivePlayersCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
