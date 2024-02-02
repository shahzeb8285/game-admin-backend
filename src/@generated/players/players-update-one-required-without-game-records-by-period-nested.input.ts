import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutGame_records_by_periodInput } from './players-create-without-game-records-by-period.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutGame_records_by_periodInput } from './players-create-or-connect-without-game-records-by-period.input';
import { playersUpsertWithoutGame_records_by_periodInput } from './players-upsert-without-game-records-by-period.input';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutGame_records_by_periodInput } from './players-update-to-one-with-where-without-game-records-by-period.input';

@InputType()
export class playersUpdateOneRequiredWithoutGame_records_by_periodNestedInput {

    @Field(() => playersCreateWithoutGame_records_by_periodInput, {nullable:true})
    @Type(() => playersCreateWithoutGame_records_by_periodInput)
    create?: playersCreateWithoutGame_records_by_periodInput;

    @Field(() => playersCreateOrConnectWithoutGame_records_by_periodInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutGame_records_by_periodInput)
    connectOrCreate?: playersCreateOrConnectWithoutGame_records_by_periodInput;

    @Field(() => playersUpsertWithoutGame_records_by_periodInput, {nullable:true})
    @Type(() => playersUpsertWithoutGame_records_by_periodInput)
    upsert?: playersUpsertWithoutGame_records_by_periodInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;

    @Field(() => playersUpdateToOneWithWhereWithoutGame_records_by_periodInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutGame_records_by_periodInput)
    update?: playersUpdateToOneWithWhereWithoutGame_records_by_periodInput;
}
