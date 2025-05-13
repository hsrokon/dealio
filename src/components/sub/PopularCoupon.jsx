

const PopularCoupon = ({coupon}) => {

    const { title, code, percent_off, duration, duration_in_months, times_redeemed, valid, category, store, expires_on } = coupon;

    const categoryColors = {
        Electronics: 'bg-blue-100 text-blue-800',
        Food: 'bg-red-100 text-red-800',
        Fashion: 'bg-pink-100 text-pink-800',
        Beauty: 'bg-purple-100 text-purple-800',
        Travel: 'bg-green-100 text-green-800',
        Default: 'bg-gray-100 text-gray-800'
    };

    const colorClass = categoryColors[category] || categoryColors.Default;

    return (
        <div className={`w-full rounded-lg p-4 ${colorClass}`}>
            <h3 className="bg-primary">{title}</h3>
            <p>{store}</p>
            <h4>Redeem code</h4>
            <p>{code}</p>
            <p>{percent_off}</p>
            <h5>{valid}</h5>
            <div>
                <p>{duration}</p>
                <p>{duration_in_months}</p>
            </div>
            <p>Redeemed: {times_redeemed}</p>
            <p>Expires on:{expires_on}</p>
        </div>
    );
};

export default PopularCoupon;