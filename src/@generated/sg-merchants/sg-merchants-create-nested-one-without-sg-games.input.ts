import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_merchantsCreateWithoutSg_gamesInput } from './sg-merchants-create-without-sg-games.input';
import { Type } from 'class-transformer';
import { sg_merchantsCreateOrConnectWithoutSg_gamesInput } from './sg-merchants-create-or-connect-without-sg-games.input';
import { sg_merchantsWhereUniqueInput } from './sg-merchants-where-unique.input';

@InputType()
export class sg_merchantsCreateNestedOneWithoutSg_gamesInput {

    @Field(() => sg_merchantsCreateWithoutSg_gamesInput, {nullable:true})
    @Type(() => sg_merchantsCreateWithoutSg_gamesInput)
    create?: sg_merchantsCreateWithoutSg_gamesInput;

    @Field(() => sg_merchantsCreateOrConnectWithoutSg_gamesInput, {nullable:true})
    @Type(() => sg_merchantsCreateOrConnectWithoutSg_gamesInput)
    connectOrCreate?: sg_merchantsCreateOrConnectWithoutSg_gamesInput;

    @Field(() => sg_merchantsWhereUniqueInput, {nullable:true})
    @Type(() => sg_merchantsWhereUniqueInput)
    connect?: sg_merchantsWhereUniqueInput;
}
