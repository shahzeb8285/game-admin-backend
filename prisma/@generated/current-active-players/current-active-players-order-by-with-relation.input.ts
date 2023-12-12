import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { playersOrderByWithRelationInput } from '../players/players-order-by-with-relation.input';

@InputType()
export class current_active_playersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    player_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last_active_time?: keyof typeof SortOrder;

    @Field(() => playersOrderByWithRelationInput, {nullable:true})
    players?: playersOrderByWithRelationInput;
}
