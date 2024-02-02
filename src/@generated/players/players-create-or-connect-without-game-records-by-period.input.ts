import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutGame_records_by_periodInput } from './players-create-without-game-records-by-period.input';

@InputType()
export class playersCreateOrConnectWithoutGame_records_by_periodInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateWithoutGame_records_by_periodInput, {nullable:false})
    @Type(() => playersCreateWithoutGame_records_by_periodInput)
    create!: playersCreateWithoutGame_records_by_periodInput;
}
