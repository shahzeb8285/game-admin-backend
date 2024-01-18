import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CurrentActivePlayersCreateManyInput {

    @Field(() => String, {nullable:false})
    player_id_r!: string;

    @Field(() => Date, {nullable:false})
    last_active_time!: Date | string;
}