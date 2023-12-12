import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { current_active_playersCreateManyInput } from '../current-active-players/current-active-players-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManycurrentActivePlayersArgs {

    @Field(() => [current_active_playersCreateManyInput], {nullable:false})
    @Type(() => current_active_playersCreateManyInput)
    data!: Array<current_active_playersCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
