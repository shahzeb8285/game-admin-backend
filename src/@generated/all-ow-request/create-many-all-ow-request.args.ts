import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AllOwRequestCreateManyInput } from './all-ow-request-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAllOwRequestArgs {

    @Field(() => [AllOwRequestCreateManyInput], {nullable:false})
    @Type(() => AllOwRequestCreateManyInput)
    data!: Array<AllOwRequestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
