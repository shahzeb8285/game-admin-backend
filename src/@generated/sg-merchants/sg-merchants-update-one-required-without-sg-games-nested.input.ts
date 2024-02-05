import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_merchantsCreateWithoutSg_gamesInput } from './sg-merchants-create-without-sg-games.input';
import { Type } from 'class-transformer';
import { sg_merchantsCreateOrConnectWithoutSg_gamesInput } from './sg-merchants-create-or-connect-without-sg-games.input';
import { sg_merchantsUpsertWithoutSg_gamesInput } from './sg-merchants-upsert-without-sg-games.input';
import { sg_merchantsWhereUniqueInput } from './sg-merchants-where-unique.input';
import { sg_merchantsUpdateToOneWithWhereWithoutSg_gamesInput } from './sg-merchants-update-to-one-with-where-without-sg-games.input';

@InputType()
export class sg_merchantsUpdateOneRequiredWithoutSg_gamesNestedInput {

    @Field(() => sg_merchantsCreateWithoutSg_gamesInput, {nullable:true})
    @Type(() => sg_merchantsCreateWithoutSg_gamesInput)
    create?: sg_merchantsCreateWithoutSg_gamesInput;

    @Field(() => sg_merchantsCreateOrConnectWithoutSg_gamesInput, {nullable:true})
    @Type(() => sg_merchantsCreateOrConnectWithoutSg_gamesInput)
    connectOrCreate?: sg_merchantsCreateOrConnectWithoutSg_gamesInput;

    @Field(() => sg_merchantsUpsertWithoutSg_gamesInput, {nullable:true})
    @Type(() => sg_merchantsUpsertWithoutSg_gamesInput)
    upsert?: sg_merchantsUpsertWithoutSg_gamesInput;

    @Field(() => sg_merchantsWhereUniqueInput, {nullable:true})
    @Type(() => sg_merchantsWhereUniqueInput)
    connect?: sg_merchantsWhereUniqueInput;

    @Field(() => sg_merchantsUpdateToOneWithWhereWithoutSg_gamesInput, {nullable:true})
    @Type(() => sg_merchantsUpdateToOneWithWhereWithoutSg_gamesInput)
    update?: sg_merchantsUpdateToOneWithWhereWithoutSg_gamesInput;
}
