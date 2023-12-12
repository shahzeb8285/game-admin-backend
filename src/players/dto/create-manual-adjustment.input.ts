import { InputType, Int, Field, Float } from '@nestjs/graphql';



@InputType()
export class CreateManualAdjustment  {
  


  @Field(() => String, {nullable:false})
  reason!: string;

  @Field(() => Float, {nullable:false})
  amount!: number;

  @Field(() => Date, {nullable:true})
  cdate?: Date | string;
  
  @Field(() => String, {nullable:false})
  player_id!: string;
}
