import PriceOption from "./PriceOption";

const PriceOptions = () => {

       const priceOptions  = [
          {
            "id": 1,
            "name": "Starter Pack",
            "features": [
              "Access to cardio machines",
              "Basic weight training area access",
              "Locker room access",
              "Limited group fitness classes"
            ],
            "price": "$29.99"
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "features": [
              "Full access to cardio machines",
              "Full access to weight training area",
              "Access to group fitness classes",
              "Locker room access",
              "Personal locker",
              "Towel service"
            ],
            "price": "$49.99"
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "features": [
              "Full access to cardio machines",
              "Full access to weight training area",
              "Access to all group fitness classes",
              "Access to sauna and steam room",
              "Locker room access with premium amenities",
              "Personal locker",
              "Towel service",
              "Nutritional consultation"
            ],
            "price": "$79.99"
          }
        ];
      
    return (
        <div>
            <h2 className="text-5xl mt-8">Best Price in the Town</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
            {
                priceOptions.map(option => <PriceOption 
                    key={option.id} 
                    option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;