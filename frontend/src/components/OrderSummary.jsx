import { motion } from "framer-motion";
import { useCartStore } from "../stores/useCartStore";

const OrderSummary = () => {
    const { total, subtotal } = useCartStore();

    const savings = subtotal - total;
    const formattedTotal = total.toFixed(2);
    const formattedSubtotal = subtotal.toFixed(2);
    const formattedSavings = savings.toFixed(2);

    return (
        <motion.div
            className="space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <p className="text-xl font-semibold text-emerald-400">
                Order summary
            </p>
            <div className="space-y-4">
                <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                        <dt />

                    </dl>

                </div>

            </div>
        </motion.div>
    );
};

export default OrderSummary;
