let pecaXadrez = "TorRe";



switch (pecaXadrez.toLowerCase()) {
    case 'bispo':
        console.log("Diagonais sem limite")
        break;

    case 'cavaleiro':
        console.log("L")
        break;

    case 'torre':
        console.log("Linhas Retas sem limite")
        break;
    
    case 'peão':
        console.log("Duas casas a frentes caso seja a primeira jogada, uma casa a frente em qualquer outro caso")
        break;
    
    case 'rainha':
        console.log("Todas as direções sem limite")
        break;

    case 'rei':
        console.log("Uma casa ao seu redor em qualquer direção")
        break;

    default:
        console.error("cabo");
    }