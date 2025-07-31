-- Create the products table if it doesn't exist
-- While Sequelize handles table creation, this ensures the table exists for seeding even if the backend is not running.
CREATE TABLE IF NOT EXISTS `products` (
  `id` CHAR(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `nome` VARCHAR(255) NOT NULL,
  `descricao` TEXT,
  `preco` DECIMAL(10, 2) NOT NULL,
  `url_imagem` VARCHAR(255),
  `quantidade_em_estoque` INT NOT NULL DEFAULT 0,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Insert sample data
-- We use INSERT IGNORE to prevent errors if the data already exists (e.g., on container restart)
INSERT IGNORE INTO `products` (`id`, `nome`, `descricao`, `preco`, `url_imagem`, `quantidade_em_estoque`, `createdAt`, `updatedAt`) VALUES
(UUID(), 'Laptop Gamer Pro', 'Um laptop de alta performance para jogos e trabalho pesado, com placa de vídeo dedicada e processador de última geração.', 8500.00, 'https://i.imgur.com/JOKsNeT.jpeg', 15, NOW(), NOW()),
(UUID(), 'Smartphone Futura X', 'Smartphone com câmera tripla de 108MP, tela AMOLED de 120Hz e bateria de longa duração.', 4200.50, 'https://i.imgur.com/JOKsNeT.jpeg', 30, NOW(), NOW()),
(UUID(), 'Fone de Ouvido Sem Fio', 'Fones de ouvido com cancelamento de ruído ativo, som imersivo e design ergonômico.', 799.90, 'https://i.imgur.com/JOKsNeT.jpeg', 50, NOW(), NOW()),
(UUID(), 'Monitor Ultrawide 4K', 'Monitor de 34 polegadas com resolução 4K, ideal para produtividade e entretenimento.', 3500.00, 'https://i.imgur.com/JOKsNeT.jpeg', 10, NOW(), NOW()),
(UUID(), 'Teclado Mecânico RGB', 'Teclado mecânico com switches de alta precisão e iluminação RGB customizável.', 450.00, 'https://i.imgur.com/JOKsNeT.jpeg', 40, NOW(), NOW()),
(UUID(), 'Cadeira Gamer Ergonômica', 'Cadeira ergonômica com suporte lombar ajustável e materiais de alta qualidade para longas sessões de uso.', 1800.75, 'https://i.imgur.com/JOKsNeT.jpeg', 20, NOW(), NOW());
