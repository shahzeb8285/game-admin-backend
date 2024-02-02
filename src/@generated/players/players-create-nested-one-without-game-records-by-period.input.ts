import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutGame_records_by_periodInput } from './players-create-without-game-records-by-period.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutGame_records_by_periodInput } from './players-create-or-connect-without-game-records-by-period.input';
import { playersWhereUniqueInput } from './players-where-unique.input';

@InputType()
export class playersCreateNestedOneWithoutGame_records_by_periodInput {

    @Field(() => playersCreateWithoutGame_records_by_periodInput, {nullable:true})
    @Type(() => playersCreateWithoutGame_records_by_periodInput)
    create?: playersCreateWithoutGame_records_by_periodInput;

    @Field(() => playersCreateOrConnectWithoutGame_records_by_periodInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutGame_records_by_periodInput)
    connectOrCreate?: playersCreateOrConnectWithoutGame_records_by_periodInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;
}
