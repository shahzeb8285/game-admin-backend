import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CurrentActivePlayersUpdateWithoutPlayersInput {

    @Field(() => Date, {nullable:true})
    last_active_time?: Date | string;
}
