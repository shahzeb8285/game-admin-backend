import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CurrentActivePlayersCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    player_id_r?: true;

    @Field(() => Boolean, {nullable:true})
    last_active_time?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
