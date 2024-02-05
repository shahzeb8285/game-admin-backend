import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class game_record_roundsGame_urlGame_records_by_period_idGame_dateCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    game_url!: string;

    @Field(() => String, {nullable:false})
    game_records_by_period_id!: string;

    @Field(() => Date, {nullable:false})
    game_date!: Date | string;
}
