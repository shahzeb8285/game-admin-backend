import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CurrentActivePlayersUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    player_id_r?: string;

    @Field(() => Date, {nullable:true})
    last_active_time?: Date | string;
}
