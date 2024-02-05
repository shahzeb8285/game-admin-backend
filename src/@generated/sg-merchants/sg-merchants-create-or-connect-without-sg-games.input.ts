import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_merchantsWhereUniqueInput } from './sg-merchants-where-unique.input';
import { Type } from 'class-transformer';
import { sg_merchantsCreateWithoutSg_gamesInput } from './sg-merchants-create-without-sg-games.input';

@InputType()
export class sg_merchantsCreateOrConnectWithoutSg_gamesInput {

    @Field(() => sg_merchantsWhereUniqueInput, {nullable:false})
    @Type(() => sg_merchantsWhereUniqueInput)
    where!: sg_merchantsWhereUniqueInput;

    @Field(() => sg_merchantsCreateWithoutSg_gamesInput, {nullable:false})
    @Type(() => sg_merchantsCreateWithoutSg_gamesInput)
    create!: sg_merchantsCreateWithoutSg_gamesInput;
}
