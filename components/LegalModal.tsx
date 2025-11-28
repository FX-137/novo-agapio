import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-yellow-400 rounded-t-2xl">
          <h2 className="text-2xl font-bold text-red-800">
            {type === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
          </h2>
          <button 
            onClick={onClose}
            className="text-red-800 hover:bg-red-700 hover:text-white rounded-full p-2 transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto text-gray-700 leading-relaxed">
          {type === 'privacy' ? (
            <div className="space-y-4">
              <p><strong>1. Coleta de Dados:</strong> Nós respeitamos a sua privacidade. Este site não coleta dados pessoais automaticamente. Quaisquer dados fornecidos (como nome ou telefone) são utilizados exclusivamente para o processamento do pedido via WhatsApp.</p>
              <p><strong>2. Uso das Informações:</strong> As informações compartilhadas nas conversas de WhatsApp são de responsabilidade do usuário e do estabelecimento comercial.</p>
              <p><strong>3. Cookies:</strong> Utilizamos cookies apenas para funcionamento essencial do site e análise anônima de tráfego.</p>
              <p><strong>4. Contato:</strong> Em caso de dúvidas sobre seus dados, entre em contato através dos canais oficiais do estabelecimento.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <p><strong>1. Aceitação:</strong> Ao utilizar nosso cardápio digital, você concorda com estes termos.</p>
              <p><strong>2. Pedidos:</strong> Os pedidos são realizados externamente via WhatsApp. A disponibilidade dos itens e os preços estão sujeitos a alteração sem aviso prévio.</p>
              <p><strong>3. Entregas:</strong> As taxas de entrega e áreas de cobertura devem ser consultadas diretamente com o atendente no momento do pedido.</p>
              <p><strong>4. Imagens:</strong> As imagens são meramente ilustrativas.</p>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-100 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};