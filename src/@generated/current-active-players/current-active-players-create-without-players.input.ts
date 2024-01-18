import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CurrentActivePlayersCreateWithoutPlayersInput {

    @Field(() => Date, {nullable:false})
    last_active_time!: Date | string;
}
