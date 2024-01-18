import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlayerOrderByWithRelationInput } from '../player/player-order-by-with-relation.input';

@InputType()
export class CurrentActivePlayersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    player_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last_active_time?: keyof typeof SortOrder;

    @Field(() => PlayerOrderByWithRelationInput, {nullable:true})
    players?: PlayerOrderByWithRelationInput;
}
