"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function LiveChat() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 left-6 z-50 flex items-start gap-4 flex-col-reverse">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="bg-white text-black p-4 rounded-2xl shadow-2xl mb-2 w-64 border border-[#D4AF37]/20"
                    >
                        <h4 className="font-bold mb-1">Need help? 👋</h4>
                        <p className="text-sm text-gray-600 mb-4">Chat with our team directly!</p>

                        <a
                            href="https://wa.me/971505552194"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 w-full bg-[#25D366] text-white p-3 rounded-xl mb-2 hover:brightness-110 transition-all font-medium"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            WhatsApp Us
                        </a>

                        <a
                            href="tel:+971505552194"
                            className="flex items-center gap-3 w-full bg-black text-white p-3 rounded-xl hover:bg-gray-800 transition-all font-medium"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M2.38 1.73c-1.6 1.75-2.2 4.17-1.12 7.7.98 3.2 3.1 6.4 6.7 9.68 3.32 3.02 6.64 4.5 9.27 4.5.23 0 .44-.01.65-.03 2.6-.2 4.09-1.9 4.64-3.41.28-.76.04-1.53-.66-1.85l-3.3-1.52c-.65-.3-1.38-.2-1.88.24l-1.5 1.3c-1 .85-2.61.35-4.2-1.25-1.59-1.59-1.79-3.37-1.23-4.19l1.45-1.36c.55-.52.73-1.34.42-2.02l-1.55-3.42c-.41-.88-1.28-1.08-1.97-.73L4.8 7.3c-1.35.43-1.98.02-2.42-1.99-.44-2.01-.06-2.58.55-3.14.61-.55 1.25-.8 1.83-.88.67-.1 1.24.49 1.24 1.16v.92c-.01.27.23.49.5.49-.01 0 .23-.23.23-.5V2.42c.01-1.39-1.34-2.49-2.93-2.26-1.6.23-2.6 1.79-2.6 3.65v.26l1.37-1.23z" />
                            </svg>
                            Call Now
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#D4AF37] text-black p-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 relative group"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                )}
                {/* Ping animation hint */}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
}
