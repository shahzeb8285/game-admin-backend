import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutGame_records_by_periodInput } from './players-update-without-game-records-by-period.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutGame_records_by_periodInput } from './players-create-without-game-records-by-period.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutGame_records_by_periodInput {

    @Field(() => playersUpdateWithoutGame_records_by_periodInput, {nullable:false})
    @Type(() => playersUpdateWithoutGame_records_by_periodInput)
    update!: playersUpdateWithoutGame_records_by_periodInput;

    @Field(() => playersCreateWithoutGame_records_by_periodInput, {nullable:false})
    @Type(() => playersCreateWithoutGame_records_by_periodInput)
    create!: playersCreateWithoutGame_records_by_periodInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
