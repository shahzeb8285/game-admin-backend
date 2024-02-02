import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutGame_records_by_periodInput } from './players-update-without-game-records-by-period.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutGame_records_by_periodInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutGame_records_by_periodInput, {nullable:false})
    @Type(() => playersUpdateWithoutGame_records_by_periodInput)
    data!: playersUpdateWithoutGame_records_by_periodInput;
}
